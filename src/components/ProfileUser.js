import React, { Component } from 'react'

export default class ProfileUser extends Component {
  render() {
    return (
        <div className="profile">
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuYMJ0yTQq3XoYeHjrYstcCJnxKJEtlWnWP8aQviBS_lXnF64" alt="" className="img-rounded img-responsive" />
                        </div>
                        <div className="col-sm-6 col-md-8">
                            <h4 style={{color:"black"}}>{this.props.username}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
