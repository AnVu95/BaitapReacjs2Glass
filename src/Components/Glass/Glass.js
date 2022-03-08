import React, { Component } from 'react';
import './Glass.css'
class Glass extends Component {
    arrGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        glass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    SetGlass(newGlass) {
        this.setState({ glass: newGlass })
    }
    RenderGlass(glass) {
        return (
            <div key={glass.id} onClick={() => {
                this.SetGlass(glass)
            }} className="glass-item col-2">
                <img src={`./img/${glass.url}`} alt="" />
            </div>
        )
    }
    glassList = () => {
        return this.arrGlass.map((item) => {
            return this.RenderGlass(item)
        })
    }
    render() {
        let { glass } = this.state
        return (
            <div className="glass">
                <div className="glass-title">
                    TRY GLASSES APP ONLINE
                    </div>
                <div className="container">
                    <div className="model row">
                        <div className="model__right col-6">
                            <img src="./img/model.jpg" alt=""/>
                            <div className="glass-card">
                                <div className="glass-model">
                                    <img src={`./img/${glass.url}`} alt=""/>
                                </div>
                                <div className="glass-info">
                                    <h5>{glass.name}</h5>
                                    <span className="bg-danger p-1">{glass.price}$</span>
                                    <span className="text-success p-1"> Stocking</span>
                                    <p>{glass.desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="model__left col-6">
                            <img src="./img/model.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="glass-list row">
                        {this.glassList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Glass;