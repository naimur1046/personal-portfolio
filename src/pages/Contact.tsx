import ContactImage from '../assets/phone-call.png';
import Email from '../assets/email.png';
import Location from '../assets/location.png';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-6 bg-gray-100">
      <p className="text-lg font-semibold text-blue-600">Contact With Me</p>
      
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
        <div className="md:w-1/2 pr-6">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Reach Out to Me</h1>
          <p className="text-gray-600 mb-6">
            If you want to know more about me, my work, or collaborate, 
            just fill up the form or email me. For urgent matters, you can call me directly.
          </p>
          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center space-x-3">
              <img src={Location} alt="Location Icon" className="w-6 h-6" />
              <p className="text-gray-700">Location: Noakhali, Chattogram, Bangladesh</p>
            </div>
            <div className="flex items-center space-x-3">
              <img src={ContactImage} alt="Phone Icon" className="w-6 h-6" />
              <p className="text-gray-700">Mobile: 01788360952</p>
            </div>

            <div className="flex items-center space-x-3">
              <img src={Email} alt="Email Icon" className="w-6 h-6" />
              <p className="text-gray-700">Email: naimurrahman1046@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <Form layout="vertical" className="space-y-4">
            {/* Name Field */}
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name.' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email.' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Subject" name="subject">
              <Input />
            </Form.Item>
            <Form.Item
              label="Enter Your Comment"
              name="comment"
              rules={[{ required: true, message: 'Please enter your comment.' }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
