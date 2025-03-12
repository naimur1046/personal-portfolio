import ContactImage from "../assets/phone-call.png";
import Email from "../assets/email.png";
import Location from "../assets/location.png";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 bg-gray-50">
      <p className="text-lg font-semibold text-blue-600 uppercase tracking-wider">
        Contact Me
      </p>

      <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl p-10 w-full max-w-5xl mt-6">
        {/* Left Section - Contact Info */}
        <div className="md:w-1/2 pr-8 border-r border-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Let's Connect</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have questions, collaboration ideas, or just want to say hi? 
            Fill out the form or reach out to me directly through email or phone.
          </p>
          
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <img src={Location} alt="Location Icon" className="w-7 h-7" />
              <p className="text-gray-700 text-lg">Noakhali, Chattogram, Bangladesh</p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <img src={ContactImage} alt="Phone Icon" className="w-7 h-7" />
              <p className="text-gray-700 text-lg">01788360952</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <img src={Email} alt="Email Icon" className="w-7 h-7" />
              <p className="text-gray-700 text-lg">naimurrahman1046@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 pl-8">
          <Form layout="vertical" className="space-y-5">
            {/* Name */}
            <Form.Item
              label={<span className="text-lg font-medium text-gray-700">Your Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name." }]}
            >
              <Input className="py-2 px-4 border rounded-lg" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label={<span className="text-lg font-medium text-gray-700">Email</span>}
              name="email"
              rules={[{ required: true, message: "Please enter your email." }]}
            >
              <Input className="py-2 px-4 border rounded-lg" />
            </Form.Item>

            {/* Subject */}
            <Form.Item
              label={<span className="text-lg font-medium text-gray-700">Subject</span>}
              name="subject"
            >
              <Input className="py-2 px-4 border rounded-lg" />
            </Form.Item>

            {/* Message */}
            <Form.Item
              label={<span className="text-lg font-medium text-gray-700">Your Message</span>}
              name="comment"
              rules={[{ required: true, message: "Please enter your comment." }]}
            >
              <TextArea rows={4} className="py-2 px-4 border rounded-lg" />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full py-3 text-lg rounded-lg">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
