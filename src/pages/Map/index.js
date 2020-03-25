import React from 'react'

let BMapGL = window.BMapGL
export default class Map extends React.Component{
    componentDidMount() {
        this.initMap()
    }
    initMap() {
        let map = new BMapGL.Map("container");
        let point = new BMapGL.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
    }
    render() {
        return <div className="map">
            <div id="container"></div> 
        </div>
    }
}