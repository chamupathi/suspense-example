import { Profiler, Suspense, lazy } from 'react';
import './App.css';


const demoLoading = (promise, time = 1000, key) => {
  console.log('loading :', key)
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  }).then(() => promise)
}

const DataList = lazy(() => demoLoading(import('./components/data-list'), 1000, 'list-1'));
const DataList2 = lazy(() => demoLoading(import('./components/data-list'),3000, 'list-2'));
const DataList3 = lazy(() => demoLoading(import('./components/data-list'),4000, 'list-3'));

const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  // Aggregate or log render timings...
  console.log('actualDuration', actualDuration)
  console.log('baseDuration', baseDuration)
}

function App() {

  return (
    <div className="App">
      <h4>Sinlge component Suspense </h4>

      <Suspense fallback={<div>Loading...</div>}>
        <DataList isStatic />
      </Suspense>

      <h4>Multiple Suspense </h4>
      <Profiler onRender={onRender}>
      <Suspense fallback={<h5>Waiting till all components are loaded...</h5>}>
        <DataList2 />
        <DataList3 />
      </Suspense>
      </Profiler>
    </div>
  );
}

export default App;
