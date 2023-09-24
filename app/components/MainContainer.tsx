

const MainContainer = (props: any) => {
    return (
        <main className="bg-iceblue min-h-screen flex justify-center">
          <div className="bg-white w-screen p-8 mx-[20px] rounded-t-lg 2xl:mx-[200px] md:mx-[100px]">
            {props.children}
          </div>
        </main>
    )
}

export default MainContainer;