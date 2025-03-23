import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers";
import { useForm } from "../../../hooks/useForm";
import { useSearchParams } from "react-router";

export const SearchPage = () => {


  const [searchParams, setSearchParams] = useSearchParams();

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const heroes = getHeroesByName( searchParams.get('q') ); 

  const showSearch = ( searchParams.get('q').length === 0 );
  const showError = ( searchParams.get('q').length !== 0 && heroes.length === 0 )

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={ onInputChange }
            />

            <button
              className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            No heroes with <b>{ searchParams.get('q') }</b>
          </div>

          {
            heroes.map( hero => <HeroCard key={ hero.id } { ...hero } />)
          }

          {/* {
            (searchParams.get('q') === '') 
              ? (<div className="alert alert-primary">Search a hero</div>)
              : heroes?.length > 0
                ? (heroes.map( hero => <HeroCard key={ hero.id } { ...hero } />) )
                : (searchParams.get('q') !== '') && (<div className="alert alert-danger">No heroes with <b>{ searchParams.get('q') }</b></div>)
          } */}
        </div>
      </div>
    </>
  )
}
