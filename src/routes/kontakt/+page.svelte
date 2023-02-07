<script>
</script>

<section>
	<div class="container">
		<h2>Kontakt</h2>
		<form>
			<div class="name-email row">
				<div class="name column">
					<label for="name">Navn</label>
					<input type="text" id="name" name="name" />
				</div>
				<div class="email column">
					<label for="email">Epost</label>
					<input type="text" id="email" name="email" />
				</div>
			</div>
			<div class="dropdown-info row">
				<div class="type-container rows-container column">
					<label for="type">Piano eller flygel</label>
					<select name="type" id="type">
						<option value="piano">Piano</option>
						<option value="flygel">Flygel</option>
					</select>
				</div>
				<div class="bosted rows-container column">
					<label for="bosted">Bosted</label>
					<select name="bosted" id="bosted">
						<option value="gjovik">Gjøvik</option>
						<option value="raufoss">Raufoss</option>
						<option value="skreia">Skreia</option>
						<option value="lena">Lena</option>
						<option value="reinsvoll">Reinsvoll</option>
					</select>
				</div>
				
			</div>
            <div class="melding rows-container">
                <label for="melding">Melding</label>
                <textarea name="melding" id="melding" cols="30" rows="10" />
            </div>
		</form>
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
	}

    .container {
        width: 400px;
    }

	.rows-container {
        display: flex;
        flex-direction: column;
	}

    .wrap {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        gap: 30px;

    }
    .column {
        flex: 1;
    }

    input, select {
        box-sizing: border-box;
        width: 100%;
        height: 24px;
        padding: 0 5px;
        margin: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    
</style>
