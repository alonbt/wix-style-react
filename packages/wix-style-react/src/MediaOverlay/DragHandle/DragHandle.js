import React from 'react';
import MoveLarge from 'wix-ui-icons-common/system/MoveLarge';
import { stVars } from '../../Foundation/stylable/colors.st.css';

const DragHandle = () => <MoveLarge style={{ color: stVars.D80 }} />;

DragHandle.displayName = 'MediaOverlay.DragHandle';

export default DragHandle;
