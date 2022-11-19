import renderer from 'react-test-renderer';
import UserInfo from "./UserInfo";

it('user info render without prop user', () => {
    const component = renderer.create(
      <UserInfo user={null}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});