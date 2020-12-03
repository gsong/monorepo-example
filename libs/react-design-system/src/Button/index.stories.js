import Button from ".";

const Story = {
  title: "Components/Button",
  component: Button,
};

const Template = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = { children: "Hi" };

export default Story;
