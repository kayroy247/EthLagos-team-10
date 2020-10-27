import React from 'react';
import {Row, Col, Card, Table, Tabs, Tab, Button} from 'react-bootstrap';
// import GridData from '/home/emmanuel/projects/EThLagos-team-10/Server/SmartContracts/contracts/GridData'
import getWeb3 from "./getWeb3";
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import axios from 'axios';
import Swal from "sweetalert2";
import axiosInstance from '../../api/api.js'


class Dashboard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         miniGrids: []
    //     };
    //   }
    state = { storageValue: 0, web3: null, accounts: null, contract: null };

    //   componentDidMount() {
    //       this.getGrids();
    //   }


    //    getGrids() {
    //        console.log(this);
    //     axiosInstance
    //       .get("/mini-grids")
    //       .then( (response) => {
    //        console.log(this);

    //         if (response.data) {
    //           this.setState({miniGrids: response.data})
    //           console.log(response.data);
              
    //         } else {
    //           console.log(response);
    //         }
    //       })
    //       .catch( (error) => {
    //          console.log(error);
    //       })
    //       .finally(() => console.log("final"));
    //   };

    //   handleClick(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    //   }
    
    componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();
    
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();
    
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
        //   let deployedNetwork = SimpleStorageContract.networks[networkId];
        //   const storageInstance = new web3.eth.Contract(
        //     SimpleStorageContract.abi,
        //     deployedNetwork && deployedNetwork.address,
        //   );
        //   let deployedNetwork = GridData.networks[networkId];
        //   const helloWorldInstance = new web3.eth.Contract(
        //     GridData.abi,
        //     deployedNetwork && deployedNetwork.address
        //   );
    
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
        //   this.setState({ web3, accounts, helloWorldContract: helloWorldInstance }, this.runExample);
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };
    
      runExample = async () => {
        const { accounts, storageContract, helloWorldContract } = this.state;
    
        // Stores a given value, 5 by default.
        await storageContract.methods.set(5).send({ from: accounts[0] });
    
        // Get the value from the contract to prove it worked.
        const storageResponse = await storageContract.methods.get().call();
    
        const greetingResponse = await helloWorldContract.methods.get().call();
    
        // Update state with the result.
        this.setState({ storageValue: storageResponse, greeting: greetingResponse });
      };
    

    render() {
        const tabContent = (
            <Aux>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3784</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Julie Vad</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3544</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>2739</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Frida Thomse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>1032</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Silje Larsen</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>8750</span>
                    </div>
                </div>
                <div className="media friendlist-box align-items-center justify-content-center">
                    <div className="m-r-10 photo-table">
                        <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
                    </div>
                    <div className="media-body">
                        <h6 className="m-0 d-inline">Storm Hanse</h6>
                        <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>8750</span>
                    </div>
                </div>
            </Aux>
            
        );
        
        return (
            <Aux>
                <Row>
                    {/* {this.state.miniGrids.map(grid => ( */}
                        <Col md={6} xl={4} 
                        // key={grid.id} 
                        style={{cursor: "pointer"}} 
                        // onClick={this.handleClick}
                        > 
                        <Card>
                            <Card.Body>
        <h6 className='mb-4'>Mini Grid</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                    {/* <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>{grid.name} </h3> */}
                                    </div>

                                    <div className="col-3 text-right">
                    {/* <p className="m-b-0">{grid.cluster_id}</p> */}
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ))} */}
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Monthly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5"/> $2.942.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">36%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Yearly Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $8.638.32</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">70%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={8}>
                        <Button onClick={this.state.web3}>Get Reports</Button> <Button onClick={this.state.web3}>Download CSV</Button>
                    </Col>
                    <Col md={6} xl={8}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Hashed Data</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                    <tr className="unread">
                                        
                                        <td>
                                            <h6 className="mb-1">{this.state.greeting} SHA-256
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</h6>
                                            
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>11 MAY 12:56</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">View</a></td>
                                    </tr>
                                    <tr className="unread">
                                        
                                        <td>
                                            <h6 className="mb-1">SHA-256
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</h6>
                                           
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15"/>11 MAY 10:35</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">View</a></td>
                                    </tr>
                                    <tr className="unread">
                                        
                                        <td>
                                            <h6 className="mb-1">SHA-256
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</h6>
                                            
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>9 MAY 17:38</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">View</a></td>
                                    </tr>
                                    <tr className="unread">
                                        
                                        <td>
                                            <h6 className="mb-1">SHA-256
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</h6>
                                            
                                        </td>
                                        <td>
                                            <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-red f-10 m-r-15"/>19 MAY 12:56</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">View</a></td>
                                    </tr>
                                    <tr className="unread">
                                        
                                        <td>
                                            <h6 className="mb-1">SHA-256
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e</h6>
                                            
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15"/>21 July 12:56</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">View</a></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        
                        <Card>
                            <Card.Body className='border-bottom'>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-zap f-30 text-c-green"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">235</h3>
                                        <span className="d-block text-uppercase">total Households</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Body>
                                <div className="row d-flex align-items-center">
                                    <div className="col-auto">
                                        <i className="feather icon-map-pin f-30 text-c-blue"/>
                                    </div>
                                    <div className="col">
                                        <h3 className="f-w-300">26</h3>
                                        <span className="d-block text-uppercase">total locations</span>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;