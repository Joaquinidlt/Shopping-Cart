import { Component } from 'react'
import Producto from './Producto'

const styles = {
  productos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map(producto =>
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />)}
      </div>
    )
  }
};

export default Productos;
