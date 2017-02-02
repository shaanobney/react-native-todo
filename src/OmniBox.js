import React, {Component} from 'react';
import {TextInput, Stylesheet} from 'react-native';
import TodoModel from './TodoModel';
import Utils from './Utils';

class OmniBox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({newValue: ''});
    }

    onChange(event) {
        var title = event.nativeEvent.text;
        var dataList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title + '.*', 'gi')));

        this.setState({newValue: title});
        this.props.updateDataList(dataList);
    }

    onSubmit(event) {
        var newDataItem = new TodoModel(this.state.newValue);

        var dataList = this.props.data;
        var dataItem = Utils.findTodo(newDataItem, dataList);
        if (dataItem) {
            Utils.move(dataList, (dataList.indexOf(dataItem)), 0);

            this.setState({newValue: ''});
            this.props.updateDataList(dataList);
            return;
        }

        dataList.unshift(newDataItem);

        this.setState({newValue: ''});
        this.props.updateDataList(dataList);
    }

    render() {
        return (
            <TextInput style={{
                minWidth: 250,
                height: 36,
                padding: 6,
                marginTop: 10,
                marginBottom: 10,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 0,
                backgroundColor: 'pink'
            }} placeholder='ADD/SEARCH TASKS' blurOnSubmit={false} value={this.state.newValue} onSubmitEditing={this.onSubmit} onChange={this.onChange}></TextInput>
        );
    }
}

module.exports = OmniBox;
