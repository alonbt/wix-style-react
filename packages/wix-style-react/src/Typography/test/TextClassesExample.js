import React from 'react';
import classNames from 'classnames';

import typography from '..';
import styles from '../docs/styles.scss';

const sizes = ['Tiny', 'Small', 'Medium'];
const weights = ['Thin', 'Normal', 'Bold'];

export function SizeAndWeightTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Size</th>
          <th>Weight</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {sizes
          .map(size => weights.map(weight => ({ size, weight })))
          .flat()
          .map((props, key) => (
            <tr key={key}>
              <td>{props.size}</td>
              <td>{props.weight}</td>
              <td>
                <span
                  className={classNames([
                    typography.text,
                    typography[`size${props.size}`],
                    typography[`weight${props.weight}`],
                  ])}
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

const skins = ['Standard', 'Success', 'Error', 'Premium', 'Disabled'];

export function SkinsTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Skin</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {skins.map((skin, key) => (
          <tr key={key}>
            <td>{skin}</td>
            <td>
              <span
                className={classNames([
                  typography.text,
                  typography[`skin${skin}`],
                ])}
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

export function OtherPropsTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>light</td>
          <td className={styles.light}>
            <span className={classNames([typography.text, typography.light])}>
              the quick brown fox jumps over the lazy dog
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default function renderSizeAndWeightTable() {
  return (
    <div>
      <SizeAndWeightTable />
      <br />
      <SkinsTable />
      <br />
      <OtherPropsTable />
    </div>
  );
}
