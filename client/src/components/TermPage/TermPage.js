import React, { Component } from "react";
import { Card, CardTitle } from "material-ui/Card";
import TermMain from "../TermMain";
import TermTags from "../TermTags";
import TermRelevant from "../TermRelevant";
import TermExtended from "../TermExtended";
import TermComments from "../TermComments";
import SearchBar from "../SearchBar";
import axios from "axios";
import CodeSandbox from "../CodeSandbox";

class TermPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      word: {},
      comments: []
    };
  }

  componentDidMount() {
    axios
      .get(this.props.match.params.input)
      .then(res => {
        this.setState({
          word: res.data[0],
          comments: res.data[0].comments
        });
        console.log(this.state.word);
      })
      .catch(err => console.log(err));
  }

  // componentDidUpdate() {
  //     axios.get(this.props.match.params.input)
  //         .then(res => {
  //             this.setState({
  //                 word: res.data[0],
  //                 comments: res.data[0].comments
  //             })
  //             console.log(this.state.word)
  //         })
  //         .catch(err => console.log(err));
  // }

  render() {
    return (
      <Card className="container">
        <CardTitle />
        <SearchBar />
        <div className="TermPage-flex-container">
          <div className="row">
            <div>
              <TermMain
                word={this.state.word.word}
                summary={this.state.word.summary}
              />
            </div>
            <div className="TermPage-flex-container25">
              <TermTags
                tags1={this.state.word.tags1}
                tags2={this.state.word.tags2}
              />
              <TermRelevant
                relevant1={this.state.word.related1}
                relevant2={this.state.word.related2}
              />
            </div>
          </div>
          <TermExtended
            word={this.state.word.word}
            definition={this.state.word.definition}
          />
          <TermComments
            id={this.state.word._id}
            comments={this.state.comments}
          />
          <CodeSandbox />
        </div>
      </Card>
    );
  }
}

export default TermPage;
