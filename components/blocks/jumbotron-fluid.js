import Face from '../images/face'

const JumbotronFluid = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <Face></Face>
        <h1 className="display-4 text-center">Fluid jumbotron</h1>
        <p className="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
    </div>
  )
}

export default JumbotronFluid;