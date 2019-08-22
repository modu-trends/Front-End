import React, { Component } from "react";
import axios from "axios";

import {connect} from "react-redux";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Loader from "react-loader-spinner";

import { withAlert } from 'react-alert'
 

import { fetchDisagreement, fetchReport } from "../actions/index";


import PetitionWrapper from "../components/petition/PetitionWrapper";
import PetitionLeftWrapper from "../components/petition/PetitionLeftWrapper";
import PetitionRightWrapper from "../components/petition/PetitionRightWrapper";

//left component
import HeaderBox from "../components/petition/HeaderBox";
import ContentBox from "../components/petition/ContentBox";
import FooterBox from "../components/petition/FooterBox";

//right component
import NewsBox from "../components/petition/NewsBox";
import NewsItem from "../components/petition/NewsItem";

import RelationBox from "../components/petition/RelationBox";

//Buttons
import DisagreementButton from "../components/petition/DisagreementButton";
import ReportButton from "../components/petition/ReportButton";


export class PetitionContainer extends Component{

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
 
      
    constructor(props) {
        super(props);

        const { cookies } = props;

        console.log(cookies);

        this.state = {
            petitionId: this.props.props.match.params.id,
            article:{},
            news:[],
            simanalysState:"fail",
            cookie: cookies.get('token') || 'fail',
            load:false,
            reportModalIsOpen: false,
            disagreementModalIsOpen: false,
            selectedOption:"1",
            disagreement:"",
            reason:""
        };

        // report 
        this.reportOpenModal = this.reportOpenModal.bind(this);
        this.reportAfterOpenModal = this.reportAfterOpenModal.bind(this);
        this.reportCloseModal = this.reportCloseModal.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);


        this.reportSubmit = this.reportSubmit.bind(this);

        //disagreement
        this.DisagreementEvent = this.DisagreementEvent.bind(this);
        
        this.renderAPI()
    }



    reportOpenModal(){
        if(this.props.token === undefined || this.props.token === false){
            this.props.alert.show('해당 서비스를 사용하려면 로그인이 필요합니다.')
        }  

        else{
            this.setState({reportModalIsOpen: true});
        }
    }

    reportAfterOpenModal(){

    }

    reportCloseModal(){
        this.setState({
            reportModalIsOpen: false,
            reason: "",
            selectedOption: "1"
        });
    }


    

    renderAPI(){
        
        axios.get("/api/petition/"+this.state.petitionId).then(response => {
         
          if(response["status"] === 200 && response['data']['article']['status'] === "success"){
            console.log(response);
            // console.log(response['data']['article']['data']);
            this.setState({
                article:response['data']['article']['data'],
                news:response['data']['news']['data'],
                newsState: response['data']['news']['status'],
                simanalysState: response['data']['simanalys']['status'],
                simanalys: response['data']['simanalys']['data'],
                load:true,
                disagreement: response['data']['article']['data']['disagreement']
            })
           
          } 
          else{
            console.log("Not Found")
          }
        });
    }

    renderNews(){
        if(this.state.newsState === "success"){
            return this.state.news.map((news,index) => {
                return <NewsItem key={news.id} title={news.title} id={news.id} link={news.link} index={index+1} />;
            });
        } else{
            return <div className="news-item">관련 뉴스가 없습니다.</div>;
        }
    }

    renderRelation(){
        if(this.state.simanalysState === "success"){
            return this.state.simanalys.map((simanalys,index) => {
                return <NewsItem key={simanalys.id} title={simanalys.title} id={simanalys.id} link={"https://www.everytrend.kr/petition/"+simanalys.id} index={index+1} />;
            });

        } else{
            return <div className="news-item">비슷한 청원이 없습니다.</div>;
        }
    }

    DisagreementEvent(){
       
        if(this.props.token){
            
            this.props.fetchDisagreement(this.state.petitionId, this.props.token).then(response => {

                if(this.props.disagreement.data.status == "success"){
                    // 성공
                    this.setState({
                        ...this.state,
                        disagreement: this.state.disagreement + 1
                    })
                } 
                else{
                    this.props.alert.show('해당 게시글에 이미 반대를 하였습니다.')
                }
            });
        } 
        else{
            this.props.alert.show('해당 서비스를 사용하려면 로그인이 필요합니다.')
        }
    }


    handleOptionChange(changeEvent){
        this.setState({
            selectedOption: changeEvent.target.value
        });  
    }

    handleTextChange(changeEvent){
        this.setState({
            reason: changeEvent.target.value
        });  
    }

    reportSubmit(){
        const pageId = this.state.petitionId;
        const token = this.props.token;
        const content = this.state.reason;
        const type = this.state.selectedOption

        if(this.state.selectedOption == "5"){
            if(this.state.reason == ""){
                console.log("Not found content...");   
            }
            else{

                this.props.fetchReport(pageId, token, type, content)
                //모델 종료
                this.reportCloseModal();
            }
        } 
        else{
            this.props.fetchReport(pageId, token, type, content)
            //모델 종료
            this.reportCloseModal();
        }
    }
    

    render(){

        const category = {
            "0":"전체",
            "35":"정치개혁",
            "36":"외교/통일/국방",
            "37":"일자리",
            "38":"미래",
            "39":"성장동력",
            "40":"농산어촌",
            "41":"보건복지",
            "42":"육아/교육",
            "43":"안전/환경",
            "44":"저출산/고령화대책",
            "45":"행정",
            "46":"반려동물",
            "47":"교통/건축/국토",
            "48":"경제민주화",
            "49":"인권/성평등",
            "50":"문화/예술/체육/언론",
            "51":"기타"
        }

     
        if(this.state.load == true){

            return (
                <PetitionWrapper>
                    <PetitionLeftWrapper>
                        <HeaderBox 
                            title={this.state.article.title} 
                            created_at={this.state.article.created_at} 
                            finished_at={this.state.article.finished_at} 
                            category={category[this.state.article.category]} 
                            status={this.state.article.status ? '청원종료' : '청원진행중'} 
                            agreement={this.state.article.agreement} 
                            provider={this.state.article.provider}
                        />
                        <ContentBox content={this.state.article.content}></ContentBox>
                        <FooterBox>
                            <DisagreementButton onclick={this.DisagreementEvent}  count={this.state.disagreement} />
                            <ReportButton 
                                onclick={this.reportOpenModal} 
                                isOpen={this.state.reportModalIsOpen}
                                onAfterOpen={this.reportAfterOpenModal}
                                onRequestClose={this.reportCloseModal}
                                selectedOption={this.state.selectedOption}
                                handleOptionChange={this.handleOptionChange}
                                submit={this.reportSubmit}
                                handleTextChange={this.handleTextChange}
                                value={this.state.reason} 
                            />
                        </FooterBox>
                    </PetitionLeftWrapper>
                    <PetitionRightWrapper>
                        <NewsBox>{this.renderNews()}</NewsBox>
                        <RelationBox>{this.renderRelation()}</RelationBox>
                    </PetitionRightWrapper>
                </PetitionWrapper>
            )
        }
        else{
            return(<div style={{marginTop:230}}> <Loader type="ThreeDots" color="#000" height="50" width="50" className="loader" /></div>)
        }
    }
}


// export default PetitionContainer;
export default connect(
    state => {
      return {
        report: state.lists.report,
        disagreement: state.lists.disagreement,
        token: state.lists.token
      };
    },
    { fetchDisagreement, fetchReport }
)(withCookies(withAlert()(PetitionContainer)));
  