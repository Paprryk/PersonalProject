import React from 'react';
import StackoverflowIMG from "../Images/stack-overflow-svgrepo-com.svg"
import Chatgptimg from "../Images/chatgpt.png"
import bootstrapimg from "../Images/bootstrap-svgrepo-com.svg"
import npmimg from "../Images/npm-svgrepo-com.svg"


const Resources = () => {
    return (
        <div className="d-flex justify-content-center ">
            <div className="container rounded p-2 bg-dark shadow-lg mb-2 " style={{ maxWidth: '800px' }}>
                <h2 className='text-center'>Resources</h2>
                <div className="row justify-content-center text-center">
                    <div className="col-md-2 mb-2">
                        <h5>Stack overflow</h5>
                        <img src={StackoverflowIMG} alt="Stack overflow" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <h5>Bootstrap</h5>
                        <img src={bootstrapimg} alt="Bootstrap classes & react bootstrap" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <h5>ChatGPT</h5>
                        <img src={Chatgptimg} alt="ChatGPT" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-2 mb-2">
                        <h5>npmjs</h5>
                        <img src={npmimg} alt="npmjs" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
