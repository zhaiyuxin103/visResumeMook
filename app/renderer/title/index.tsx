import React from 'react';
import './index.less';
import Avatar from '../assets/masonite-logo.png';

interface IProps {
  /**
   * @description 标题
   *
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  return (
    <div style={styles} styleName="title">
      <img src={Avatar} alt="" />
      {text}
    </div>
  );
}

export default Title;
