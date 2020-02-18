import { reducer, TodoItemInterface } from './reducer';

describe('<reducer functions/>', (): void => {
  it('addItem should add item', (): void => {
    const state: TodoItemInterface[] = [
      {
        label: 'test',
        important: false,
        done: false,
        id: '33'
      }
    ];
    const action: Record<string, any> = {
      payload: {
        label: 'test2',
        important: false,
        done: false,
        id: '34'
      }
    };
    //   expect(reducer(state, action)).toHaveReturned([
    //     {
    //       label: 'test',
    //       important: false,
    //       done: false,
    //       id: '33'
    //     },
    //     {
    //       label: 'test2',
    //       important: false,
    //       done: false,
    //       id: '34'
    //     }
    //   ]);
  });
});
