import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import globalnews from "./globalnews.jpg";
export default function NewsList(props) {

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5
    const pageVisited = pageNumber * usersPerPage

    const paginatedchange = Math.ceil(props.articles.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (

        <div className='mt-5'>
            {props.isLoading ? <div className="cargando">
                <img src="/cargando.svg" />

            </div> : null}

            {props.isLoading == false && props.articles.length == 0 ?
                <div style={{ textAlign: "center", marginTop: '15vh' }}>
                    <h2>unsuccessful result</h2>
                </div> : null}
            <div className="row">
                {
                    props.articles.slice(pageVisited, pageVisited + usersPerPage)
                        .map(item => {

                            return (
                                <div className="col-md-8">
                                    <img src={item.urlToImage ? item.urlToImage: globalnews } class="card-img-top" alt={item.title} />

                                    <div className="card mb-9">
                                        <div className="card-body">
                                            <h6 className="card-title">{item.title}</h6>
                                            <p className="card-text">{item.content}</p>

                                        </div>
                                        <div className="card-body">
                                            <a href={item.url} target='_blank' class="btn btn-primary p-3 mb-2 bg-primary text-white">More details...</a>
                                            <p>Published by: {item.author}</p>
                                            <p>Date of publication: {item.publishedAt}</p>
                                        </div>
                                    </div>

                                </div>

                            )

                        })
                }
                <div className="cambiopaginas justify-content-center mt-4">
                    <ReactPaginate color="sucess" previousLabel={"Previous"} nextLabel={"Next"} pageCount={paginatedchange}
                        onPageChange={changePage} containerClassName={"cambiopaginas"} previousLinkClassName={"previusBttn"}
                        nextLinkClassName={"nextBttn"} disabledClassName={"paginationDisabled"} activeClassName={"paginationActive"}
                        className="nav" />
                </div>
            </div>

        </div>
    )
}

