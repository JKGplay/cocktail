import React, { useState } from "react";

const Drinks = (p) => {

    return (
        <div className='container'>
            {p.drink.map((e, i) => (
                <div className='item'>
                    <p style={{fontWeight: 'bold', fontSize: 36 + 'px', marginTop: 3 + '%'}}>
                        {e.strDrink}
                        <hr/>
                    </p>
                    <div style={{fontSize: 20 + 'px', margin: 2 + '%'}}>
                        <div style={{display: 'block', minHeight: 200 + 'px', textAlign: 'left'}}>
                            <img src={e.strDrinkThumb} height='200px' style={{borderRadius: 10 + 'px', marginRight: 3 + '%', float: 'left'}}/>
                            {e.strInstructions}
                        </div>
                        <ul style={{textAlign: 'left', display: 'block'}}>
                                {(e.strIngredient1) ? <li>{e.strIngredient1}{(e.strMeasure1) ? <span style={{float: 'right'}}>{e.strMeasure1}</span> : null}</li> : null}
                                {(e.strIngredient2) ? <li>{e.strIngredient2}{(e.strMeasure2) ? <span style={{float: 'right'}}>{e.strMeasure2}</span> : null}</li> : null}
                                {(e.strIngredient3) ? <li>{e.strIngredient3}{(e.strMeasure3) ? <span style={{float: 'right'}}>{e.strMeasure3}</span> : null}</li> : null}
                                {(e.strIngredient4) ? <li>{e.strIngredient4}{(e.strMeasure4) ? <span style={{float: 'right'}}>{e.strMeasure4}</span> : null}</li> : null}
                                {(e.strIngredient5) ? <li>{e.strIngredient5}{(e.strMeasure5) ? <span style={{float: 'right'}}>{e.strMeasure5}</span> : null}</li> : null}
                                {(e.strIngredient6) ? <li>{e.strIngredient6}{(e.strMeasure6) ? <span style={{float: 'right'}}>{e.strMeasure6}</span> : null}</li> : null}
                                {(e.strIngredient7) ? <li>{e.strIngredient7}{(e.strMeasure7) ? <span style={{float: 'right'}}>{e.strMeasure7}</span> : null}</li> : null}
                                {(e.strIngredient8) ? <li>{e.strIngredient8}{(e.strMeasure8) ? <span style={{float: 'right'}}>{e.strMeasure8}</span> : null}</li> : null}
                                {(e.strIngredient9) ? <li>{e.strIngredient9}{(e.strMeasure9) ? <span style={{float: 'right'}}>{e.strMeasure9}</span> : null}</li> : null}
                                {(e.strIngredient10) ? <li>{e.strIngredient10}{(e.strMeasure10) ? <span style={{float: 'right'}}>{e.strMeasure10}</span> : null}</li> : null}
                                {(e.strIngredient11) ? <li>{e.strIngredient11}{(e.strMeasure11) ? <span style={{float: 'right'}}>{e.strMeasure11}</span> : null}</li> : null}
                                {(e.strIngredient12) ? <li>{e.strIngredient12}{(e.strMeasure12) ? <span style={{float: 'right'}}>{e.strMeasure12}</span> : null}</li> : null}
                                {(e.strIngredient13) ? <li>{e.strIngredient13}{(e.strMeasure13) ? <span style={{float: 'right'}}>{e.strMeasure13}</span> : null}</li> : null}
                                {(e.strIngredient14) ? <li>{e.strIngredient14}{(e.strMeasure14) ? <span style={{float: 'right'}}>{e.strMeasure14}</span> : null}</li> : null}
                                {(e.strIngredient15) ? <li>{e.strIngredient15}{(e.strMeasure15) ? <span style={{float: 'right'}}>{e.strMeasure15}</span> : null}</li> : null}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Drinks