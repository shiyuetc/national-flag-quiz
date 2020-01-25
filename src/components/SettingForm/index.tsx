import React, { Component } from 'react';
import './SettingForm.css';

interface Props {
  handleChange: Function
}

interface States {
  selectedCount: number,
  selectedArea: Array<boolean>
}

class SettingForm extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCount: 6,
      selectedArea: [ true, true, true, true, true, true ]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    if (!e.target.checked && this.state.selectedCount <= 1) {
      e.target.checked = true;
    } else {
      const area_copy = this.state.selectedArea;
      this.setState({
        selectedCount: this.state.selectedCount + (area_copy[e.target.name] ? -1 : 1)
      });
      area_copy[e.target.name] = !area_copy[e.target.name];
      return this.props.handleChange(this.state.selectedArea);
    }
  }

  render() {
    return (
      <>
        <p className="SubText">出題範囲</p>
        <div className="CheckBoxList">
          <label htmlFor="asia"><input type="checkbox" name="0" id="asia" defaultChecked={true} onChange={this.handleChange} />アジア（亜州）50件</label><br />
          <label htmlFor="europa"><input type="checkbox" name="1" id="europa" defaultChecked={true} onChange={this.handleChange} />ヨーロッパ（欧州）43件</label><br />
          <label htmlFor="africa"><input type="checkbox" name="2" id="africa" defaultChecked={true} onChange={this.handleChange} />アフリカ（阿州）56件</label><br />
          <label htmlFor="south-america"><input type="checkbox" name="3" id="south-america" defaultChecked={true} onChange={this.handleChange} />北アメリカ（北米）22件</label><br />
          <label htmlFor="north-america"><input type="checkbox" name="4" id="north-america" defaultChecked={true} onChange={this.handleChange} />南アメリカ（南米）13件</label><br />
          <label htmlFor="oceania"><input type="checkbox" name="5" id="oceania" defaultChecked={true} onChange={this.handleChange} />オセアニア（大洋州）16件</label><br />
        </div>
      </>
    );
  }
}

export default SettingForm;

