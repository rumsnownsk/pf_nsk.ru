<div class="crud">
    <h2>Добавить новый объект</h2>

    <?php if (isset($_SESSION['error'])): ?>
        <div class="alert alert-danger">
            <?= $_SESSION['error'];
            unset($_SESSION['error']) ?>
        </div>
    <?php endif; ?>

    <form action="/admin/work/create" method="post" enctype="multipart/form-data">

        <div class="form-group">
            <div class="form-group__label">
                <label for="inputFileWork">Фотография объекта</label>
                <p class="help-block">(только одна картинка!!!)</p>
            </div>
            <div class="form-group__data">
                <input name="photo" id="inputFileWork" type="file" >
<!--                <p class="help-block redMarker">обязательное поле</p>-->
            </div>
        </div>

        <div class="form-group">
            <div class="form-group__label">
                <label for="inputTitleWork">Название объекта</label>
                <p class="help-block">(улица, номер дома)</p>
            </div>
            <div class="form-group__data">
                <input name="title" id="inputTitleWork" type="text" class="form-control" value="<?= oldInfo('title') ?>" title="">
                <p class="help-block redMarker">обязательное поле</p>
            </div>
        </div>


        <div class="form-group">
            <div class="form-group__label">
                <label for="selectCategoryIdWork">Категория</label>
            </div>
            <div class="form-group__data">
                <select name="category_id" id="selectCategoryIdWork" title="">
                    <option selected disabled hidden>Здесь...</option>
                    <?php foreach ($categories as $category) : ?>
                        <option value="<?= $category->id ?>" <?= oldSelect($category, "category_id") ?> >
                            <?= $category->title ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <p class="help-block redMarker">обязательное поле</p>
            </div>
        </div>




        <div class="form-group">
            <div class="form-group__label">
                <label for="selectStageIdWork">Этап работы:</label>
            </div>
            <div class="form-group__data">
                <select name="stage_id" id="selectStageIdWork" title="">
                    <option selected disabled hidden>Здесь...</option>
                    <?php foreach ($stages as $stage) : ?>
                        <option value="<?= $stage->id ?>" <?= oldSelect($stage, "stage_id") ?> >
                            <?= $stage->name ?>
                        </option>
                    <?php endforeach; ?>
                </select>
                <p class="help-block redMarker">обязательное поле</p>
            </div>
        </div>

        <div class="form-group">
            <div class="form-group__label">
                <label for="inputDateWork">Дата создания:</label>
            </div>
            <div class="form-group__data" style="width: 300px;">

                <input name="timeCreate" id="inputDateWork" type="date" class="form-control" value="<?= oldDate("timeCreate") ?>"
                       title="">
                <p class="help-block redMarker">обязательное поле</p>
            </div>
        </div>

        <div class="form-group">
            <div class="form-group__label">
                <label for="inputPublishWork">Разместить на сайте?</label>
            </div>
            <div class="form-group__data">
                <input name="publish" id="inputPublishWork" type="checkbox" value="" <?= oldChecked("publish") ?> class="form-control" title="">
            </div>
        </div>

        <div class="form-group">
            <div class="form-group__label">
                <label for="taDescWork">Краткое описание</label>
            </div>
            <div class="form-group__data">
                <textarea name="description" id="taDescWork" class="form-control" title="" placeholder="<?= oldInfo('description')?>"></textarea>
            </div>

        </div>

        <div class="form-group">
            <button class="btn btn-success" type="submit">Добавить</button>
            <a href="/admin" class="btn btn-info" style="margin-left: 50px">На главную</a>
        </div>
    </form>
    <?php unset($_SESSION['oldData']); ?>
</div>


