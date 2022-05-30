import React from 'react';

const Blogs = () => {
    return (
        <div className='text-black my-20 mx-20'>
            <div className='bg-white border rounded text-left px-10 py-3 my-5'>
                <h1 className="text-2xl font-bold text-yellow-700 ">HOW WILL YOU IMPROVE THE PERFORMANCE OF A REACT APPLICATION?</h1>
                <p>To Improve The Performance Of React Application We Have To Understand About How React Work. We Have To Store Or Catch Data And Try To Reuse The Same Data. We Can Use Some Builtin Function Like React.Memo() To Memorize The Same Component Expensive Function.</p>
            </div>
            <div className='bg-white border rounded text-left px-10 py-3 my-5'>
                <h1 className="text-2xl font-bold text-yellow-700 ">WHAT ARE THE DIFFERENT WAYS TO MANAGE A STATE IN A REACT APPLICATION?</h1>
                <p>There Are Many Way To Manage A State SOme Of Them Are UseStat, Context Api, UseReducer, UseRedux . This Help To Know And Update A State To Mantain It's Funconality.</p>
            </div>
            <div className='bg-white border rounded text-left px-10 py-3 my-5'>
                <h1 className="text-2xl font-bold text-yellow-700 ">HOW DOES PROTOTYPICAL INHERITANCE WORK?</h1>
                <p>The Prototypical Inheritance Is A Javascript Feture To Add Method And Property In Objects. My This An Object Can Inherit The Properties Of Others Object And Methods. To Set Prototype Of An Object We Use Object.GetPrototypeof And Object.SetPrototypeOF. Now We Can Also Use __proto__: Objecttoprotype.</p>
            </div>
            <div className='bg-white border rounded text-left px-10 py-3 my-5'>
                <h1 className="text-2xl font-bold text-yellow-700 ">WHY YOU DO NOT SET THE STATE DIRECTLY IN REACT. FOR EXAMPLE, IF YOU HAVE CONST [PRODUCTS, SETPRODUCTS] = USESTATE([]). WHY YOU DO NOT SET PRODUCTS = [...] INSTEAD, YOU USE THE SETPRODUCTS</h1>
                <p>To Update A State Or Product We Call SetProduct. Because SetProduct Update The Value In Memory And It State. It Is A Function Which Update The Product And Then Return A New State In The Array.</p>
            </div>
            <div className='bg-white border rounded text-left px-10 py-3 my-5'>
                <h1 className="text-2xl font-bold text-yellow-700 ">WHY YOU DO NOT SET THE STATE DIRECTLY IN REACT. FOR EXAMPLE, IF YOU HAVE CONST [PRODUCTS, SETPRODUCTS] = USESTATE([]). WHY YOU DO NOT SET PRODUCTS = [...] INSTEAD, YOU USE THE SETPRODUCTS</h1>
                <p>To Find A Product By Name I Will Use .Find() ES6 Function. It Will Return An Array With All The Desire Result . Code -- Products.Find(El==El.Name==="Iphone");</p>
            </div>
            <div className='bg-white border rounded text-left px-10 py-3 my-5'>
                <h1 className="text-2xl font-bold text-yellow-700 ">WHAT IS A UNIT TEST? WHY SHOULD WRITE UNIT TESTS?</h1>
                <p>Unite Test Is A Automated Test Written By Developer To Ensure That A Project Or Programe Is Run Well And Give The Currect Output As Want. We Should Write Unit Tests To Ensure The Programme Qualitey And Find Out Its Bugs And Other Errors Before The Production.</p>
            </div>
        </div>
    );
};

export default Blogs;