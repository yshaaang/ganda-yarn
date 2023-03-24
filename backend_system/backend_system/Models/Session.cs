﻿using System;
using System.Collections.Generic;

namespace backend_system.Models;

public partial class Session
{
    public string Id { get; set; } = null!;

    public string UserId { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
