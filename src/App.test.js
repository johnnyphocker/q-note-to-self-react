import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
    let app = mount(<App />);

    it('renders the app title', () => {
        expect(app.find('h2').text()).toEqual('Note to self');
    });

    // it('renders the clear button', () => {
    //     expect(app.find('.btn').at(0).text()).toEqual('Clear');
    // });

    describe('when rendering the form', () => {
        it('creates a Form component', () => {
            expect(app.find('form').exists()).toBe(true);
        });
    });

    describe('when creating a note', () => {
        let testNote = 'test note';

        beforeEach(() => {
            app.find('.inputchange').simulate('change', {
                target: { value: testNote }
            });
        });

        it('updates the text in state', () => {
            expect(app.state().text).toEqual(testNote);
        });

        describe('and submitting the new note', () => {
            beforeEach(() => {
                app.find('.create').at(0).simulate('click')
            });

            it('adds the new note to state', () => {
                expect(app.state().notes[0].text).toEqual(testNote);
            });

            describe('and clicking the clear button', () => {
                beforeEach(() => {
                    app.find('.btn').at(0).simulate('click');
                });

                it('clears the notes in state', () => {
                    expect(app.state().notes).toEqual([]);
                })
            })
        });
    });
});