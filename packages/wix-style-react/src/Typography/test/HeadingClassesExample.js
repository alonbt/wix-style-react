import React from 'react';
import typography from '..';
import classNames from 'classnames';
import styles from '../docs/styles.scss';

function HeadingTable(props = {}) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Heading</th>
          <th>Result {props.light && '(light)'}</th>
        </tr>
      </thead>
      <tbody>
        {['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map(heading => (
          <tr key={heading}>
            <td>{heading}</td>
            <td className={props.light && styles.light}>
              <span
                className={classNames(
                  typography[heading],
                  props.light && typography.light,
                )}
              >
                the quick brown fox jumps over the lazy dog
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function renderHeadingTable() {
  return (
    <div>
      <HeadingTable />
      <br />
      <HeadingTable light />
    </div>
  );
}
