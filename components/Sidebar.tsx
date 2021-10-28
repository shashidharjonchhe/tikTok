import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 60px;
  height: 100%;
  padding-bottom: 150px;
  justify-content: flex-end;
`;
const Menu = styled.View`
  margin: 9px 0;
  align-items: center;
`;
const User = styled.View`
  width: 48px;
  height: 48px;
  margin-bottom: 13px;
`;
const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 48px;
  border-width: 2px;
  border-color: #ffffff;
`;
const Icon = styled.Image`
  height: 40px;
`;
const Count = styled.Text`
  color: #fff;
  font-size: 12px;
  letter-spacing: -0.1px;
`;

interface Props {
  count: {
    like: string;
    comment: number;
    share: number;
  };
  showMessageBox: (params: boolean) => void;
}

const Sidebar = ({ count, showMessageBox }: Props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handlePress = (): void => {
    setOpen(!open);
  };

  React.useEffect(() => {
    showMessageBox(open);
  }, [open]);

  return (
    <Container>
      <Menu>
        <Icon
          resizeMode="contain"
          source={require("../assets/icons/like.png")}
        />
        <Count>{count.like}</Count>
      </Menu>

      <Menu>
        <TouchableOpacity onPress={handlePress}>
          <Icon
            resizeMode="contain"
            source={require("../assets/icons/comment.png")}
          />
        </TouchableOpacity>
        <Count>{count.comment}</Count>
      </Menu>
      <Menu>
        <Icon
          resizeMode="contain"
          source={require("../assets/icons/share.png")}
        />
        <Count>{count.share}</Count>
      </Menu>
    </Container>
  );
};

export default Sidebar;
