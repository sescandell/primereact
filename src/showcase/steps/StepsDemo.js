import React, { Component } from 'react';
import { Steps } from '../../components/steps/Steps';
import { Growl } from '../../components/growl/Growl';
import { AppInlineHeader } from '../../AppInlineHeader';
import { StepsDoc } from './StepsDoc';

export class StepsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        };

        this.items = [
            {
                label: 'Personal',
                command: (event) => {
                    this.growl.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            },
            {
                label: 'Seat',
                command: (event) => {
                    this.growl.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
                }
            },
            {
                label: 'Payment',
                command: (event) => {
                    this.growl.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
                }
            },
            {
                label: 'Confirmation',
                command: (event) => {
                    this.growl.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="steps">
                        <h1>Steps</h1>
                        <p>Steps component is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => { this.growl = el }}></Growl>

                    <div className="card">
                        <h5>Basic</h5>
                        <Steps model={this.items} />

                        <h5>Interactive</h5>
                        <Steps model={this.items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({ activeIndex: e.index })} readOnly={false} />
                    </div>
                </div>

                <StepsDoc />

            </div>
        );
    }
}
