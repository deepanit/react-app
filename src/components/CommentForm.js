import React,{Component} from 'react';
import {Row,Col,Button,Modal,ModalHeader,ModalBody,Label} from 'reactstrap';
import {LocalForm,Errors,Control} from 'react-redux-form';

const required=(val)=>val&&val.length;
const minLength=(len)=>(val)=> (!val) || (val.length>len);
const maxLength=(len)=>(val)=>(!val) ||(val.length<=len);
class CommentForm extends Component {
	
	
	constructor(props) {
		super(props);
		this.state ={
			isModalOpen :false
		}
		this.toggleModal=this.toggleModal.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
	}
	
	toggleModal() {
		this.setState({
			isModalOpen:!this.state.isModalOpen
		});
	}
	
	onSubmit(values) {
		this.toggleModal();
		alert("Comments are :"+JSON.stringify(values));
	}
	render() {
	return (
	<div>
	<Row className="form-group">
		<Col>
		<Button type="submit" className="btn btn-default" onClick={this.toggleModal}>
		<span className="glyphicon glyphicon-pencil"></span>
		 Submit Comment
		</Button>
		</Col>
	</Row>
	<Modal isOpen = {this.state.isModalOpen} fade={false} toggle={this.toggleModal}>
	<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
	<ModalBody>
	<LocalForm onSubmit ={(values)=>{this.onSubmit(values)}}>
	<Row className="form-group">
	<Label htmlFor="rating" md={2}>Rating</Label>
	<Col md={{size:12,offset:3}}>
	<Control.select model=".rating" id="rating" name="rating" className="form-control">
	<option>1</option>
	<option>2</option>
	<option>3</option>
	<option>4</option>
	<option>5</option>
	</Control.select>
	</Col>
	</Row>
	<Row className="form-group">
	<Label htmlFor="Name" md={12}>Your Name</Label>
	<Col md={12}>
	<Control.text model=".name" id="name" name="name" placeholder="Your Name" className="form-control" validators={{required,minLength:minLength(2),maxLength:maxLength(15)}}/>
	<Errors className="text-danger" model=".name"  show="touched" messages={{required:"Name is required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}}/>
	</Col>
	</Row>
	<Row className="form-group">
	<Label htmlFor="Name" md={12}>Comment</Label>
	<Col md={12}>
	<Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"/>
	</Col>
	</Row>
	<Row className="form-group">
	<Col md={12}>
	<Button type="submit" color="primary">Submit</Button>
	</Col>
	</Row>
	</LocalForm>
	</ModalBody>
	</Modal>
	</div>
	)
	
	
	
}

}
export default CommentForm;