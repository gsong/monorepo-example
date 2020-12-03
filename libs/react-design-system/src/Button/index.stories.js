import Button from ".";

const Meta = {
  title: "Components/Button",
  component: Button,
};

const Template = (props) => <Button {...props}>Hi</Button>;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary" };

export default Meta;
