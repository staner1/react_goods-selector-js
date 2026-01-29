import 'bulma/css/bulma.css';
import './App.scss';
import clsx from 'clsx';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setValue] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== ''
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        {selectedGood !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={goods.indexOf(good)}
                data-cy="Good"
                className={clsx({
                  'has-background-success-light': good === selectedGood,
                })}
              >
                <td>
                  <button
                    data-cy={clsx(
                      { RemoveButton: good === selectedGood },
                      { AddButton: good !== selectedGood },
                    )}
                    type="button"
                    className={clsx('button', {
                      'is-info': good === selectedGood,
                    })}
                    onClick={() => {
                      setValue(selectedGood === good ? '' : good);
                    }}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
