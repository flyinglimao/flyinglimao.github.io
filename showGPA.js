let final = true
let factor = []
document.querySelectorAll('#Datagrid4 tr:nth-child(n + 2) > td:nth-child(4)').forEach( e => factor.push(+e.textContent))
let score = []
let total = 0
document.querySelectorAll('#Datagrid4 tr:nth-child(n + 2) > td:nth-child(5)').forEach( (e, idx) => {
	switch(e.textContent) {
		case '尚未確認':
			final = false
			score.push(3)
			break
		case 'A+':
		case 'A ':
			score.push(4)
			break
		case 'A-':
			score.push(3.7)
			break
		case 'B+':
			score.push(3.3)
			break
		case 'B ':
			score.push(3)
			break
		case 'B-':
			score.push(2.7)
			break
		case 'C+':
			score.push(2.3)
			break
		case 'C ':
			score.push(2)
			break
		case 'C-':
			score.push(1.7)
			break
		case 'D ':
			score.push(1)
			break
		case 'E ':
			score.push(0)
			break
		default:
			final = false
			score.push(NaN)
	}
	total += factor[idx] * score[idx]
})
let newRow = document.createElement('tr')
newRow.innerHTML = `<td><font color="#330099">GPA</font></td><td><font color="#330099">${final?'確認':'未確認'}</font></td><td><font color="#330099">${(total/factor.reduce( (a, b) => a + b, 0)).toFixed(2)}</font></td><td><font color="#330099"></font></td><td><font color="#330099"></font></td><td><font color="#330099">&nbsp;</font></td><td><font color="#330099"></font></td>`
document.querySelectorAll('#Datagrid4')[0].appendChild(newRow)
