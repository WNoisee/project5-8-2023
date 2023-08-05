
import '../Header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap'
import $ from 'jquery'
import axios from 'axios';

const Login = () => {

    const click = async(event) => {
        event.preventDefault();
        const res = await axios.get('http://127.0.0.1:8000/showData');
        console.log(res.data)
    }
    return (
        <div>
            <div className="Header">
                オーダー実績管理システム
            </div>
            <div className='allelement'>
                <div className='screen'>
                    <div className='title'>
                        ログイン画面
                    </div>
                    <Form className='form'>
                        <Form.Group className='col-md-5 mx-auto'>
                            <Form.Label className='error1'>ユーザーID </Form.Label>
                            <Form.Control size='lg' type="text" placeholder='Enter ID'></Form.Control>
                            <Form.Text className='text1'>エラーメッセージXXXX</Form.Text>
                            <Form.Label className='error2'>パスワード </Form.Label>
                            <Form.Control size='lg' type='password' placeholder="Enter Password"></Form.Control>
                            <Form.Text className='text2'>エラーメッセージXXXX</Form.Text>
                            <Button className='click1' onClick={(event) => click(event)}>ログイン</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <footer className='footer1'>クラフト情報システム株式会社</footer>
        </div>
    )
}

export default Login;