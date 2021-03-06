'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
      {
        this.props.files.map((file, index) => (
          <SidebarItem
            isSelected={selectedFileIndex === index}
            key={index}
            file={file}
            onClick={this.handleClick.bind(null, index)}
          />
        ))
      }
      </ul>
    );
  }
}

module.exports = Sidebar;
