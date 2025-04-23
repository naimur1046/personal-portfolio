import { motion } from "framer-motion";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface AnimatedBoxProps {
  post: Post;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ post }) => {
  return (
    <motion.div
      animate={{
        borderColor: ["#3b82f6", "#f97316", "#10b981", "#3b82f6"],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
      className="bg-white border-2 rounded-xl shadow-md p-4 w-[90%]"
    >
      <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
      <p className="text-gray-600 mt-2">{post.content}</p>
    </motion.div>
  );
};

export default AnimatedBox;
