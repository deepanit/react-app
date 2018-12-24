import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem,Row,Col,Button,Modal,ModalHeader,ModalBody,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';
import {Media} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './loadingComponent.js';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform,Fade} from 'react-animation-components';
	 function RenderComments({comments,postComment,dishId}) {		

			var add='';
						console.log(comments);

			if(comments!=null) {
			add=comments.map((d)=> {
			return(
			<Fade in>
			<Media key={d.id} tag="li">
			<p>{d.comment}<br/>
			--{d.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(d.date)))}</p>
			</Media>
			</Fade>

	);
			
	});
			}
			
		
		if(comments!=null) {
			return (
		<div >
		<Media heading>Comments</Media >
		<Media list>
		{add}
		</Media>
		<CommentForm dishId={dishId} postComment={postComment}/>
		</div>
		);
		}
		else {
		return (	<div>		<CommentForm/>
				</div>)
		}
		
	}
	
	function RenderDish({dish}) {
		const divStyle = {
			width: '40%',
		};
		
		if(dish !=null) {
		return (
		<div className="container">
				<div className="row" >

				<Breadcrumb>

				<BreadcrumbItem><Link to='/menu'>Menu </Link></BreadcrumbItem>
				<BreadcrumbItem active >{dish.name}</BreadcrumbItem>
		</Breadcrumb>
		<div className="col-12">
		<h3>{dish.name}</h3>
		<hr/>
		</div>
		</div>
		<div className="col-12 md-5 m-1">
			<FadeTransform in transformProps={{exitTransform:'scale(0.5) translateY(-50%)' }} >
		<Card style={divStyle}>
		<CardImg width="100%" src={baseUrl+dish.image} alt={dish.name}/>
		<CardBody>
			<CardTitle>{dish.name}</CardTitle>
			<CardText>{dish.description}</CardText>
		</CardBody>
		</Card>
		</FadeTransform>
		</div>
		


		</div>
	);
	}
	else {
	return (
	<div></div>	
	);
	}
	}

const required = (val) => val &&val.length;
const minLength=(len)=>(val)=> (!val) || (val.length>len);
const maxLength=(len)=>(val)=>(!val) ||(val.length<=len);
class CommentForm extends React.Component {
	
	
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
		this.props.postComment(this.props.dishId,values.rating,values.name,values.comment);
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
	
	const DishDetail = (props)=> {
     console.log('props'+props);
	 if(props.isLoading) {
			
			return (
				<div className="container">
					<div className="row">
						<Loading/>
					</div>
				</div>
			);
		}
		else if(props.errMess) {
			
			return (
				<div className="container">
					<div className="row">
						<h4>{this.props.errMess}</h4>
					</div>
				</div>
			);
			
		}
	return (
	<div>
		<RenderDish dish={props.dish}/>
		<RenderComments comments={props.comments}  postComment={props.postComment} dishId={props.dish.id}/>
		
	</div>
	
		);
	}
	
	
export default DishDetail;