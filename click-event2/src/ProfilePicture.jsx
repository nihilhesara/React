function ProfilePicture() {
    const imgUrl = "./src/assets/myimg.jpeg"
    const handleClick2 = () => console.log("OUCH!")

    return (
        <img onClick={handleClick2} src={imgUrl}></img>
    );
}

export default ProfilePicture