import renderer from 'react-test-renderer';
import NoUsersText from "./NoUsersText";

it('no users text render', () => {
  const component = renderer.create(
    <NoUsersText text="NoUsersText"/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onClick();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});