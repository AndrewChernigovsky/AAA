<div class="form-slide ">
  <h3>Какой бюджет Вы готовы выделить на продвижение вашего нового сайта ? </h3>
  <div class="chooses rangebar-container">
    <label class="rangebar-label">
      <input type="range" name="price" min="20000" max="500000" id='price' value='250000'>
    </label>
    <label class="rangebar-cost">
      <input type="number" name="total-cost" id='total-cost' value='250000'>
    </label>
  </div>
  <script>
        const rangeBar = document.getElementById('price');
        const valueDisplay = document.getElementById('total-cost');
        rangeBar.addEventListener('input', function() {
        valueDisplay.value = this.value; // Обновляем значение в div
    });

  </script>
</div>