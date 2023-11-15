type CardProps = {
  title: string
  content: string
  imageUrl: string
}

export const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      /> */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{content}</p>
      </div>
    </div>
  )
}
