import React from 'react';
import { connect } from 'react-redux';

const List = ({ toDoList }) => (
    <ul>
        {toDoList.map(({id, name}) => (
            <li key={id}>{name}</li>
        ))}
    </ul>
);

const mapStateToProps = (state) => ({
    toDoList: state.todo.list
});

export default connect(mapStateToProps)(List);