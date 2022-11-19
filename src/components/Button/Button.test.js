import renderer from 'react-test-renderer';
import Button from "./Button";

it('changes the class when hovered', () => {
    const component = renderer.create(
      <Button>Text</Button>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
        tree.props.onMouseEnter();
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(() => {
        tree.props.onMouseLeave();
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});