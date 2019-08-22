import React from "react";
import "./ReportButton.css";

import Modal from 'react-modal';

Modal.setAppElement("body")

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
const ReportButton = props => {
    return(
        <div className="report" id="report">
            <button className="report-wrapper" onClick={props.onclick}>
                청원 신고
            </button>
                <Modal
                    isOpen={props.isOpen}
                    onAfterOpen={props.onAfterOpen}
                    onRequestClose={props.onRequestClose}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                <div className="report-box">
                    <div className="report-title">신고하기</div>
                    <div className="report-sub-title">해당 청원을 신고하시겠습니까?</div>
                    
                    <div className="option">
                        <input type="radio" value="1" name="report" checked={props.selectedOption === '1'} 
                      onChange={props.handleOptionChange} /> 중복게시
                    </div>
                    <div className="option">
                        <input type="radio" value="2" name="report" checked={props.selectedOption === '2'} 
                      onChange={props.handleOptionChange} /> 욕설 및 비속어  
                    </div>
                    <div className="option">
                        <input type="radio" value="3" name="report" checked={props.selectedOption === '3'} 
                      onChange={props.handleOptionChange} /> 폭력정, 선정적, 또는 특정 집단에 대한 혐오  
                    </div>
                    <div className="option">
                        <input type="radio" value="4" name="report" checked={props.selectedOption === '4'} 
                      onChange={props.handleOptionChange} /> 개인정보, 허위사실, 타인의 명예 훼손 
                    </div>
                    <div className="option">
                        <input type="radio" value="5" name="report" checked={props.selectedOption === '5'} 
                      onChange={props.handleOptionChange} /> 기타
                    </div>
                    <div className="content-input-box">
                        <textarea className="content-input" placeholder="신고하는 사유를 입력해주세요" value={props.value} onChange={props.handleTextChange}></textarea>
                    </div>
                    <div className="report-button-box">
                        <button onClick={props.onRequestClose} className="cancel-button">취소</button>
                        <button onClick={props.submit} className="submit-button">보내기</button>
                    </div>
                </div> 
            </Modal>
        </div>
    )
};

export default ReportButton;
