import Microwave from '../Microwave';
import Panel from '../Panel';

function KitchenComponent(props) {
    const { timerTime, timerStart, timerOn, startTimer, stopTimer, adjustTimer, resetTimer } = props;
    return (
        <div className="w-screen h-screen flex flex-column">
            <div className="w-1/4 h-full bg-gray-100 border border-solid border-gray-400 flex flex-row">
                <div className="w-1/2 h-full border-r border-solid border-gray-400 flex items-center justify-end">
                    <div className="h-1/6 border border-solid border-gray-400 mr-10" />
                </div>
                <div className="w-1/2 h-full border-l border-solid border-gray-400 flex items-center justify-start">
                <div className="h-1/6 border border-solid border-gray-400 ml-10" />
                </div>
            </div>
            <div className="w-3/4 h-full flex flex-col">
                <div className="w-full h-1/6 flex flex-row flex-wrap">
                    <div className="w-1/3 flex flex-col items-center justify-evenly">
                        <div className="w-5/12 h-2/5 border border-solid">
                            <Panel
                                timerTime={timerTime}
                                index={0}
                            />
                        </div>
                        <div className="w-5/12 h-2/5 border border-solid">
                            <Panel
                                timerTime={timerTime}
                                index={1}
                            />
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-evenly">
                        <div className="w-5/12 h-2/5 border border-solid">
                            <Panel
                                timerTime={timerTime}
                                index={2}
                            />
                        </div>
                        <div className="w-5/12 h-2/5 border border-solid">
                            <Panel
                                timerTime={timerTime}
                                index={3}
                            />
                        </div>
                    </div><div className="w-1/3 flex flex-col items-center justify-evenly">
                        <div className="w-5/12 h-2/5 border border-solid">
                            <Panel
                                timerTime={timerTime}
                                index={4}
                            />
                        </div>
                        <div className="w-5/12 h-2/5 border border-solid">
                            <Panel
                                timerTime={timerTime}
                                index={5}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full h-3/6 border border-solid border-black flex flex-row flex-wrap">
                    <div className="w-1/3 bg-black flex flex-col items-center justify-evenly">
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave
                                timerTime={timerTime}
                                timerStart={timerStart}
                                timerOn={timerOn}
                                startTimer={startTimer}
                                stopTimer={stopTimer}
                                adjustTimer={adjustTimer}
                                resetTimer={resetTimer}
                                index={0}
                            />
                        </div>
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave
                                timerTime={timerTime}
                                timerStart={timerStart}
                                timerOn={timerOn}
                                startTimer={startTimer}
                                stopTimer={stopTimer}
                                adjustTimer={adjustTimer}
                                resetTimer={resetTimer}
                                index={1}
                            />
                        </div>
                    </div>
                    <div className="w-1/3 bg-black flex flex-col items-center justify-evenly">
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave
                                timerTime={timerTime}
                                timerStart={timerStart}
                                timerOn={timerOn}
                                startTimer={startTimer}
                                stopTimer={stopTimer}
                                adjustTimer={adjustTimer}
                                resetTimer={resetTimer}
                                index={2} />
                        </div>
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave
                                timerTime={timerTime}
                                timerStart={timerStart}
                                timerOn={timerOn}
                                startTimer={startTimer}
                                stopTimer={stopTimer}
                                adjustTimer={adjustTimer}
                                resetTimer={resetTimer}
                                index={3} />
                        </div>
                    </div><div className="w-1/3 bg-black flex flex-col items-center justify-evenly">
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave
                                timerTime={timerTime}
                                timerStart={timerStart}
                                timerOn={timerOn}
                                startTimer={startTimer}
                                stopTimer={stopTimer}
                                adjustTimer={adjustTimer}
                                resetTimer={resetTimer}
                                index={4} />
                        </div>
                        <div className="w-11/12 h-2/5 border border-solid border-gray-700">
                            <Microwave
                                timerTime={timerTime}
                                timerStart={timerStart}
                                timerOn={timerOn}
                                startTimer={startTimer}
                                stopTimer={stopTimer}
                                adjustTimer={adjustTimer}
                                resetTimer={resetTimer}
                                index={5} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-2/6 bg-gray-200 flex flex-row">
                    <div className="w-1/4 h-full border border-solid border-gray-400 flex items-center justify-end">
                        <div className="w-2 h-2 rounded-full border border-solid border-gray-400 bg-gray-400 mr-6"/>
                    </div>
                    <div className="w-1/4 h-full border border-solid border-gray-400 flex items-center justify-start">
                        <div className="w-2 h-2 rounded-full border border-solid border-gray-400 bg-gray-400 ml-6"/>
                    </div>
                    <div className="w-1/4 h-full border border-solid border-gray-400 flex items-center justify-end">
                        <div className="w-2 h-2 rounded-full border border-solid border-gray-400 bg-gray-400 mr-6"/>
                    </div>
                    <div className="w-1/4 h-full border border-solid border-gray-400 flex items-center justify-start">
                        <div className="w-2 h-2 rounded-full border border-solid border-gray-400 bg-gray-400 ml-6"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KitchenComponent;