import Header from "./header";

const SearchLayout = ({ children }) =>  {
  return (
    <>
      <Header />
      {children}
    </>
  )

}

export default SearchLayout;