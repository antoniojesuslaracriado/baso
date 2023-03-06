let dis = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
basic.forever(function () {
    dis = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    if (dis != 0 && dis < 20) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) != 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) != 0) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 40)
            basic.pause(2000)
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
        } else {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
        }
    } else {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
    }
})
