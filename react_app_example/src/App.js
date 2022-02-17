
import './App.css';
import Workers from "./Workers.json";
import SearchBar from "./Components/SearchBar";




function App() {

    return (
    <div className="App">
       
    
    <>
    <SearchBar placeholder="Enter the search phrase..." data={Workers} />
               
                <div>
                    <table border="2">
                        <tbody>
                            <tr>
                                <th>Worker Id</th>
                                <th>Description</th>
                                <th>Received Date</th>
                                <th>Status</th>
                                <th>Priority</th>
                            </tr>
                            
                            {Workers.data.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.work_order_id}</td>
                                    <td>{item.description}</td>
                                    <td>{item.received_date}</td>
                                    <td>{item.status}</td>
                                    <td>{item.priority}</td>
                      
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
               
            </>


    </div>
  );
}

export default App;

