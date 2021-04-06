import { EditorState } from 'draft-js';

import EditorUtilities from '../EditorUtilities';

describe('EditorUtilities', () => {
  const variableEntity = {
    text: 'Page name',
    value: 'page.name',
  };
  const variableParser = value =>
    value === variableEntity.value ? variableEntity.text : false;
  const strPrefix = 'test string ';
  const strEntity = `${strPrefix} ${variableEntity.text}  `;
  const prefix = '{{';
  const suffix = '}}';
  const strWithValue = `${strPrefix}${prefix}${variableEntity.value}${suffix} `;
  const strWithPrecedingBracket = `${strPrefix}{${prefix}${variableEntity.value}${suffix} `;

  const _moveSelectionTo = (editorState, offset) => {
    const selection = editorState.getSelection().merge({
      anchorOffset: offset,
      focusOffset: offset,
    });
    return EditorState.acceptSelection(editorState, selection);
  };

  let editorState;

  beforeEach(() => {
    editorState = EditorState.createEmpty();
  });

  describe('String to and from ContentState', () => {
    it('should convert string with value to entity', () => {
      const content = EditorUtilities.stringToContentState({
        str: strWithValue,
        variableParser,
        prefix,
        suffix,
      });
      editorState = EditorState.createWithContent(content);
      expect(editorState.getCurrentContent().getPlainText()).toEqual(strEntity);
    });
    it('should convert entity to value', () => {
      const content = EditorUtilities.stringToContentState({
        str: strWithValue,
        variableParser,
        prefix,
        suffix,
      });
      editorState = EditorState.createWithContent(content);
      expect(
        EditorUtilities.convertToString({ editorState, prefix, suffix }),
      ).toEqual(strWithValue);
    });
  });
  describe('insertEntity', () => {
    it('Should Add entity to contentState', () => {
      const content = EditorUtilities.stringToContentState({
        str: strWithValue,
        variableParser,
        prefix,
        suffix,
      });
      editorState = EditorState.createWithContent(content);
      editorState = EditorState.moveFocusToEnd(editorState);
      editorState = EditorUtilities.insertEntity(editorState, variableEntity);
      expect(editorState.getCurrentContent().getPlainText()).toEqual(
        strEntity + ` ${variableEntity.text}  `,
      );
      expect(
        EditorUtilities.convertToString({ editorState, prefix, suffix }),
      ).toEqual(strWithValue + prefix + variableEntity.value + suffix + ' ');
    });
  });
  describe('pushAndKeepSelection', () => {
    it('Should keep selection after push content', () => {
      const content = EditorUtilities.stringToContentState({
        str: strWithValue,
        variableParser,
        prefix,
        suffix,
      });
      const selectionBefore = editorState.getSelection();
      editorState = EditorUtilities.pushAndKeepSelection({
        editorState,
        content,
      });
      const selectionAfter = editorState.getSelection();
      expect(selectionBefore.getAnchorOffset()).toEqual(
        selectionAfter.getAnchorOffset(),
      );
      expect(selectionBefore.getFocusOffset()).toEqual(
        selectionAfter.getFocusOffset(),
      );
    });
  });
  describe('getMatchesInString', () => {
    it('should return matching variable from string', () => {
      const parts = EditorUtilities.getMatchesInString(
        strWithValue,
        prefix,
        suffix,
      );
      expect(parts).toHaveLength(1);

      const onePart = parts[0];
      const [wholeMatch, variable, text] = onePart;
      expect(variable).toEqual(prefix + variableEntity.value + suffix);
      expect(text).toEqual(variableEntity.value);
      expect(onePart.index).toEqual(12);
    });
    it('should ignore preceding characters that are contained within prefix', () => {
      const parts = EditorUtilities.getMatchesInString(
        strWithPrecedingBracket,
        prefix,
        suffix,
      );
      expect(parts).toHaveLength(1);

      const onePart = parts[0];
      const [wholeMatch, variable, text] = onePart;
      expect(variable).toEqual(prefix + variableEntity.value + suffix);
      expect(text).toEqual(variableEntity.value);
      expect(onePart.index).toEqual(12);
    });
  });
  describe('moveToEdge', () => {
    it('should move selection out of entity range', () => {
      const content = EditorUtilities.stringToContentState({
        str: strWithValue,
        variableParser,
        prefix,
        suffix,
      });
      editorState = EditorState.createWithContent(content);
      editorState = _moveSelectionTo(editorState, strPrefix.length);
      editorState = EditorUtilities.moveToEdge(editorState);
      expect(editorState.getSelection().getAnchorOffset()).toEqual(
        strPrefix.length,
      );

      editorState = _moveSelectionTo(editorState, strPrefix.length + 3);
      editorState = EditorUtilities.moveToEdge(editorState);
      expect(editorState.getSelection().getAnchorOffset()).toEqual(
        strPrefix.length + variableEntity.text.length + 2, // Entity with space on each side
      );
    });
  });
  describe('insertText', () => {
    it('Should Add text to contentState', () => {
      const content = EditorUtilities.stringToContentState({
        str: strWithValue,
        variableParser,
        prefix,
        suffix,
      });
      editorState = EditorState.createWithContent(content);
      editorState = EditorState.moveFocusToEnd(editorState);
      editorState = EditorUtilities.insertText(
        editorState,
        variableEntity.text,
      );
      expect(editorState.getCurrentContent().getPlainText()).toEqual(
        strEntity + `${variableEntity.text}`,
      );
      expect(
        EditorUtilities.convertToString({ editorState, prefix, suffix }),
      ).toEqual(strWithValue + variableEntity.text);
    });
  });
});
