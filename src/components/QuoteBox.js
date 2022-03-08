import React, {useState} from 'react';
import quotes from '../quoteBox.json'
import { getRandom } from '../utils/getRandom';
import Button from './Button';

const QuoteBox = () => {

    const colors = Math.floor(Math.random()*16777215).toString(16);

    const [  quote,  setQuote ] = useState(quotes[getRandom(quotes.length)])

    const changeQuote = () =>{
        setQuote(quotes[getRandom(quotes.length)])
    }


    document.body.style.backgroundColor = "#" + colors

    return (
        <div className="Card" style={{ color: "#" + colors}}>
            <p>
                <i class="fa fa-quote-left" aria-hidden="true"></i> 
                <i> {quote.quote} </i>
            </p>
            <p className="author">
                <i> <b> {quote.author}  </b> </i> 
            </p>
            <Button changeQuote = {changeQuote} colors={colors} />
        </div>
    );
};

export default QuoteBox;