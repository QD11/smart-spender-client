import React from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup'

const EditButton = () => {

    const onUpdateHandler = () => {
        console.log('hi')
    }


    return (
        <div>
            <Popup 
                modal 
                nested 
                trigger={<button type="button" >Edit</button>}
            >
            {close => (
                <Modal>
                    <div> Update your budget/planned % </div>
                    <form>
                        <div>
                            <FlexDiv>
                                <label>Available Monthly Budget</label>
                                <input type="number"></input>
                            </FlexDiv>
                            <FlexDiv>
                                <LabelDiv>
                                    <div>
                                        <label>Housing</label>
                                        <input type="number" name='housing'></input>
                                    </div>
                                    <div>
                                        <label>Food</label>
                                        <input type="number" name='food'></input>
                                    </div>
                                    <div>
                                        <label>Insurance</label>
                                        <input type="number" name='insurance'></input>
                                    </div>
                                    <div>
                                        <label>Discretionary</label>
                                        <input type="number" name='discretionary'></input>
                                    </div>
                                </LabelDiv>
                                <LabelDiv>
                                    <div>
                                        <label>Transportation</label>
                                        <input type="number" name='transport'></input>
                                    </div>
                                    <div>
                                        <label>Utility</label>
                                        <input type="number" name='utility'></input>
                                    </div>
                                    <div>
                                        <label>Emergency</label>
                                        <input type="number" name='emergency'></input>
                                    </div>
                                    <div>
                                        <label>Other</label>
                                        <input type="number" name='other'></input>
                                    </div>
                                </LabelDiv>
                            </FlexDiv>
                        </div>
                        <Actions>
                            <ActionsButton type="submit" onClick={() => {onUpdateHandler(); close()}}> Update </ActionsButton>
                            <ActionsButton onClick={() => close()}>Cancel</ActionsButton>
                        </Actions>
                    </form>
                </Modal>
    )}
            </Popup>
        </div>
    )
}

export default EditButton

const FlexDiv = styled.div`
    display: flex,
`

const LabelDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Modal = styled.div`
    font-size: 25px;
    width: 50vw;
    background-color: #e5e5e5;
    border: 2px solid black;
    border-radius: 25px;
    size: b5;
    text-align: center;
    padding: 20px;
`

const ActionsButton = styled.button`
    padding: 15px;
    border-radius: 12px;
    font-size: 15px;
    border: 1px solid black;
    cursor: pointer;
`

const Actions = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`