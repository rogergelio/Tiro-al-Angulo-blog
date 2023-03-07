import React from 'react';
import Image from "next/image"
import moment from 'moment';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-l font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
        case 'heading-one':
          return <h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h1>;
        case 'paragraph':
        return <p key={index} className="mb-8 text-base">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-theme-black shadow-lg lg:p-2 pb-12 text-neutral-200 text-justify ">
        <div className="relative overflow-hidden shadow-md mb-6 max-h-50v">
          <img src={post.featuredImage.url} alt="" className="object-top h-full w-full object-cover shadow-lg" />
        </div>
        <div className="px-4 ">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center ">
              <Image
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium ">
              <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
            if(typeObj.type=="image"){
              return <div className="flex justify-center items-center border-8 border-red-800">{getContentFragment(index, children, typeObj, typeObj.type)}</div>;
            }else{
              return getContentFragment(index, children, typeObj, typeObj.type);
            }
            
          })}
        </div>
      </div>

    </>
  );
};

export default PostDetail;